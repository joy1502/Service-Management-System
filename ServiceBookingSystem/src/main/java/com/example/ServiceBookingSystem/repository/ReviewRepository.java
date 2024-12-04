package com.example.ServiceBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ServiceBookingSystem.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

}
