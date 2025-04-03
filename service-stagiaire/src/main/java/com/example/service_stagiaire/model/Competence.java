package com.example.service_stagiaire.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@AllArgsConstructor
public class Competence {
    @JsonProperty("idCompetence")
    @Field("idCompetence")
    private String idCompetence;

    @JsonProperty("competenceName")
    @Field("competenceName")
    private String competenceName;

    @JsonProperty("level")
    @Field("level")
    private String level;

    // Constructeur, getters et setters
    public Competence() {}

    public String getIdCompetence() { return idCompetence; }
    public void setIdCompetence(String idCompetence) { this.idCompetence = idCompetence; }

    public String getCompetence() { return competenceName; }
    public void setCompetence(String competence) { this.competenceName = competence; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}
