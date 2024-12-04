package com.example.ServiceBookingSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ServiceBookingSystem.entity.Ad;

@Repository
public interface AdRepository extends JpaRepository<Ad, Long>{
	
	List<Ad> findAllByUserId(Long userId);
	
	List<Ad> findAllByServiceNameContaining(String name);

}
