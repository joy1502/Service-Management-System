package com.example.ServiceBookingSystem.services.authentication;

import com.example.ServiceBookingSystem.dto.SignupRequestDTO;
import com.example.ServiceBookingSystem.dto.UserDto;

public interface AuthService {
	
	UserDto signupClient(SignupRequestDTO signupRequestDTO);
	
	Boolean presentByEmail(String email);
	
	
	UserDto signupCompany(SignupRequestDTO signupRequestDTO);

}
