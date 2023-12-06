package com.example.demo.service;

import com.example.demo.entity.Leave;
import com.example.demo.entity.LeavesTemp;
import com.example.demo.exception.EmployeeFoundException;
import com.example.demo.exception.EmployeeIdNotFoundException;
import com.example.demo.exception.LeaveFoundException;
import com.example.demo.exception.LeaveNotFoundException;

import java.util.List;

public interface ILeavesService {

    List<LeavesTemp> getAllLeaveHistories();
    LeavesTemp addLeave(Leave leave, int empId) throws EmployeeIdNotFoundException, LeaveFoundException;
    LeavesTemp addLeaveTemp(LeavesTemp leave) throws EmployeeFoundException;
    LeavesTemp getLeaveTempByEmpId(int empId) throws EmployeeIdNotFoundException;
    LeavesTemp updateLeaveById(Leave leave, int empId) throws EmployeeIdNotFoundException, LeaveNotFoundException;
    LeavesTemp updateLeaveTemp(LeavesTemp leaveTemp) throws EmployeeIdNotFoundException;
    void deleteLeaveHistoryByEmpIdVoidReturn(int empId) throws EmployeeIdNotFoundException;
    LeavesTemp deleteLeaveHistoryByEmpId(int empId) throws EmployeeIdNotFoundException;

}
