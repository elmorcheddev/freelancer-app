package com.freelancer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.CV;
import com.freelancer.model.Review;
import com.freelancer.service.CvService;
import com.freelancer.service.ReviewService;

 
@RestController
@RequestMapping(value = "/api/review")
public class ReviewController {
@Autowired
private ReviewService reviewService ;
@Autowired
private CvService cvService ;
@GetMapping(value = "/listreviewByCv/{id}")
private List<Review> listReviewsByComp(@PathVariable Long id){
	CV cv = cvService.findByIdCv(id);
	return reviewService.findByCv(cv);
}
@GetMapping("/rating/{id}")
public Double getAverageRating(@PathVariable Long id) {
    return reviewService.getAverageRating(id);
}
@PostMapping("/saveReview")
public Review addNewCommentaire(@RequestPart("review") Review review,
                                                     @RequestParam Long userId,
                                                     @RequestParam Long compId){
	return reviewService.addNewReview(review, userId, compId);
	
}
}
