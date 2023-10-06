package com.example.mongoservice.service.leaveDb;

import com.example.mongoservice.model.leaveDb.Leave;
import com.example.mongoservice.model.leaveDb.LeaveTemp;
import com.example.mongoservice.exception.leaveDb.EmployeeFoundException;
import com.example.mongoservice.exception.leaveDb.EmployeeIdNotFoundException;
import com.example.mongoservice.exception.leaveDb.LeaveFoundException;
import com.example.mongoservice.exception.leaveDb.LeaveNotFoundException;

import java.util.List;

public interface ILeaveService {

        List<LeaveTemp> getAllLeaveHistories();
        LeaveTemp addLeave(Leave leave,int empId) throws EmployeeIdNotFoundException, LeaveFoundException;
        LeaveTemp addLeaveTemp(LeaveTemp leave) throws EmployeeFoundException;
        LeaveTemp getLeaveTempByEmpId(int empId) throws EmployeeIdNotFoundException;
        LeaveTemp updateLeaveById(Leave leave,int empId) throws EmployeeIdNotFoundException, LeaveNotFoundException;
        LeaveTemp updateLeaveTemp(LeaveTemp leaveTemp) throws EmployeeIdNotFoundException;
        void deleteLeaveHistoryByEmpIdVoidReturn(int empId) throws EmployeeIdNotFoundException;
        LeaveTemp deleteLeaveHistoryByEmpId(int empId) throws EmployeeIdNotFoundException;

}
