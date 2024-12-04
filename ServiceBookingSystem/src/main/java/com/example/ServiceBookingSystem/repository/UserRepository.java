package com.example.ServiceBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServiceBookingSystem.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	
	User findFirstByEmail(String email);

}
