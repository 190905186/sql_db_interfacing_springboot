package com.example.mongoservice.repository.leaveDb;

import com.example.mongoservice.model.leaveDb.LeaveTemp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILeaveRepository extends MongoRepository<LeaveTemp, Integer> {

}
