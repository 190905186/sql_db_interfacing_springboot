package com.example.mongoservice.service.leaveDb;

import com.example.mongoservice.model.leaveDb.Leave;
import com.example.mongoservice.model.leaveDb.LeaveTemp;
import com.example.mongoservice.exception.leaveDb.EmployeeFoundException;
import com.example.mongoservice.exception.leaveDb.EmployeeIdNotFoundException;
import com.example.mongoservice.exception.leaveDb.LeaveFoundException;
import com.example.mongoservice.exception.leaveDb.LeaveNotFoundException;
import com.example.mongoservice.repository.leaveDb.ILeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class LeaveServiceImpl implements ILeaveService {

    @Autowired
    private ILeaveRepository leaveTempRepo;

    @Override
    public List<LeaveTemp> getAllLeaveHistories() {
        return leaveTempRepo.findAll();
    }

    @Override
    public LeaveTemp addLeave(Leave leave, int empId) throws EmployeeIdNotFoundException, LeaveFoundException {
        LeaveTemp leaveTempObj = getLeaveTempByEmpId(empId);

        //the returned leave object is null exception is not handled here
        List<Leave> leaveListObj = leaveTempObj.getLeaveList();
        for(Leave leaveTemp:leaveListObj){
            if(leaveTemp.getLeaveId()==leave.getLeaveId()){
                throw new LeaveFoundException("A leave record with the given leave id is already present in the database. If you want to update the information please use appropriate API or modify the leave Id");
            }
        }
        leaveListObj.add(leave);
        leaveTempObj.setLeaveList(leaveListObj);
        return leaveTempRepo.save(leaveTempObj);
    }

    @Override
    public LeaveTemp addLeaveTemp(LeaveTemp leaveTemp) throws EmployeeFoundException {
        List<LeaveTemp> leaveHistoriesObj=getAllLeaveHistories();
        for(LeaveTemp leaveTempObj:leaveHistoriesObj){
            if(leaveTempObj.getEmpId()==leaveTemp.getEmpId()){
                throw new EmployeeFoundException("The Leave history record for the employee with the id"+leaveTemp.getEmpId()+"already exits in the database. Please verify the employee id or use API intended for Update operation");
            }
        }
        return leaveTempRepo.save(leaveTemp);
    }

    @Override
    public LeaveTemp getLeaveTempByEmpId(int empId) throws EmployeeIdNotFoundException {
        Optional<LeaveTemp> leaveTempOptional = leaveTempRepo.findById(empId);
        return leaveTempOptional.orElseThrow(() -> new EmployeeIdNotFoundException("No record found in LeaveHistory Database with Employee Id:" + empId));
    }

    @Override
    public LeaveTemp updateLeaveById(Leave leave, int empId) throws EmployeeIdNotFoundException, LeaveNotFoundException {
        Optional<LeaveTemp> leaveTempOptional = leaveTempRepo.findById(empId);
        if(leaveTempOptional.isPresent()) {
            try{
                LeaveTemp leaveTempObj=leaveTempOptional.get();
                //update the leaves properly
                for(Leave leaveObj: leaveTempObj.getLeaveList()){
                    if(leaveObj.getLeaveId()==leave.getLeaveId()){

                    }
                }
                leaveTempObj.getLeaveList().set(leave.getLeaveId(),leave);
                return leaveTempRepo.save(leaveTempObj);}
            catch(Exception e){
                System.out.println(e.toString());
                System.out.println(e.getMessage());
                System.out.println(Arrays.toString(e.getStackTrace()));
                throw new LeaveNotFoundException("No leave with the given leave id"+leave.getLeaveId()+" is found for the Employee with the given employee id"+empId);
            }
        }
        throw new EmployeeIdNotFoundException("No record found in LeaveHistory Database with Employee Id:" + empId);
    }

    @Override
    public LeaveTemp updateLeaveTemp(LeaveTemp leaveTemp) throws EmployeeIdNotFoundException {
        int empId=leaveTemp.getEmpId();
        Optional<LeaveTemp> leaveTempOptional = leaveTempRepo.findById(empId);
        if(leaveTempOptional.isPresent()) {
            return leaveTempRepo.save(leaveTemp);
        }
        throw new EmployeeIdNotFoundException("No record found in LeaveHistory Database with Employee Id"+ empId +"present in the provided information:" );
    }


    @Override
    public void deleteLeaveHistoryByEmpIdVoidReturn(int empId) throws EmployeeIdNotFoundException {
        Optional<LeaveTemp> leaveTempOptional = leaveTempRepo.findById(empId);
        if(leaveTempOptional.isPresent()) {
            leaveTempRepo.deleteById(empId);
            return;
        }
        throw new EmployeeIdNotFoundException("No record found in LeaveHistory Database with Employee Id:" + empId);
    }

    @Override
    public LeaveTemp deleteLeaveHistoryByEmpId(int empId) throws EmployeeIdNotFoundException {
        Optional<LeaveTemp> leaveTempOptional = leaveTempRepo.findById(empId);
        if(leaveTempOptional.isPresent()) {
            leaveTempRepo.deleteById(empId);
            return leaveTempOptional.get();
        }
        throw new EmployeeIdNotFoundException("No record found in LeaveHistory Database with Employee Id:" + empId);
    }
}
