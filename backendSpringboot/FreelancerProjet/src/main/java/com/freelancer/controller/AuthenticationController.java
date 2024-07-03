package com.freelancer.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.freelancer.Utils.JwtUtils;
import com.freelancer.configuration.CustomUserDetailService;
import com.freelancer.model.Utilisateurs;
import com.freelancer.model.auth.RequestToken;
import com.freelancer.model.auth.ResponseToken;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.UtilisateurServices;

import jakarta.servlet.http.HttpServletRequest;
  
 
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	@Autowired
	private UtilisateursRepo utilisateurRepo;
	@Autowired
	private UtilisateurServices utilisateurService;
	 @Autowired
	  private AuthenticationManager authenticationManager;

	  @Autowired
	  private CustomUserDetailService userDetailsService;

	  @Autowired
	  private JwtUtils jwtUtil;
	  @GetMapping("/getConnectedUser")
	    public ResponseEntity<Map<String, Object>> getConnectedUser(HttpServletRequest request) {
	        String token = request.getHeader("Authorization");
	        if (token != null && token.startsWith("Bearer ")) {
	            token = token.substring(7); 
	            String username = jwtUtil.extractUsername(token);
	            Map<String, Object> response = new HashMap<>(); 
	            if (utilisateurService != null) {
	                Utilisateurs user = utilisateurRepo.findByEmail(username);
	                response.put("userDetails", user); 
	                response.put("cv", user.getCv());
	            }
	            return ResponseEntity.ok(response);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	        }
	    }
	  @PostMapping(value = "/login")
	  public ResponseEntity<ResponseToken> authenticate(@RequestBody RequestToken request) {
	    authenticationManager.authenticate(
	        new UsernamePasswordAuthenticationToken(
	            request.getUsername() ,
	            request.getPassword()
	        )
	    );
	    final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        final Utilisateurs user= utilisateurRepo.findByEmail(request.getUsername());
	    final String jwt = jwtUtil.generateToken(userDetails);
 	    	  return ResponseEntity.ok(ResponseToken.builder().token(jwt)
	  	    		.utilisateur(user).build());
	    
	  
	  }
	  
	 

	  @GetMapping(value = "/findbyEmail/{email}")
	  public Utilisateurs findByEmailUtilisateur(@PathVariable("email") String email) {
		  
	  	return utilisateurService.findByEmailUtilisateur(email);
	  } 
	 
	     
}
