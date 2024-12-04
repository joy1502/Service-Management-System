package com.example.ServiceBookingSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ServiceBookingSystem.entity.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
	
	List<Reservation> findAllByCompanyId(Long companyId);
	
	List<Reservation> findAllByUserId(Long userId);
	

}
