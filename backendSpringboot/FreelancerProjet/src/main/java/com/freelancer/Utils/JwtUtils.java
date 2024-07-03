package com.freelancer.Utils;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.freelancer.model.Utilisateurs;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
@Service
public class JwtUtils {
	
	private SecretKey Key;
    private  static  final long EXPIRATION_TIME = 86400000; //24hours or 86400000 milisecs
    public JwtUtils(){
        String secreteString = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3";
        byte[] keyBytes = Base64.getDecoder().decode(secreteString.getBytes(StandardCharsets.UTF_8));
        this.Key = new SecretKeySpec(keyBytes, "HmacSHA256");
    } 
    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(Key)
                .compact();
    }
    public String generateRefreshToken(HashMap<String, Object> claims, UserDetails userDetails){
        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(Key)
                .compact();
    }

    public String extractUsername(String token){
        return extractClaims(token, Claims::getSubject);
    }
    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction){
        return claimsTFunction.apply(Jwts.parser().verifyWith(Key).build().parseSignedClaims(token).getPayload());
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    public boolean isTokenExpired(String token){
        return extractClaims(token, Claims::getExpiration).before(new Date());
    }
    public Utilisateurs extractUserDetailsFromToken(String token) {
  	  Claims claims = Jwts.parser().verifyWith(Key).build().parseSignedClaims(token).getPayload();

  	  Utilisateurs userDetails = new Utilisateurs();
  	  userDetails.setEmail(claims.getSubject());
  	  userDetails.setNom(claims.get("nom", String.class));
  	  userDetails.setPrenom(claims.get("prennom", String.class));
  	  userDetails.setAdresse(claims.get("adresse", String.class));
  	  userDetails.setDateNaissance(claims.get("datenaissance", Date.class));
  	  return userDetails;
  	}
 
}