package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.CompetanceCv;

 

public interface CompetanceCvService {

	CompetanceCv addNewCompetanceCv(CompetanceCv competanceCv);
    List<CompetanceCv> findByCVCompetanceCvs(CV cv);
}
