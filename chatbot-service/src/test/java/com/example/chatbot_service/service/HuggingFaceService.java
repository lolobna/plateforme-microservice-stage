package com.example.chatbot_service.service;

@Service
public class HuggingFaceService {

    private static final String API_URL = "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct";
    private static final String API_TOKEN = "ton-token-huggingface";

    @Autowired
    private RestTemplate restTemplate;

    public String generateQuestions(List<String> competences) {
        String prompt = "Tu es un recruteur. Pose 5 questions sur ces compétences : " + String.join(", ", competences);
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + API_TOKEN);
        headers.setContentType(MediaType.APPLICATION_JSON);

        JSONObject body = new JSONObject();
        body.put("inputs", prompt);

        HttpEntity<String> entity = new HttpEntity<>(body.toString(), headers);

        ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);
        return response.getBody();
    }
}

