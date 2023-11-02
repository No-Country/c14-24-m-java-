package com.nocountry.c1424mjava.config;

import com.nocountry.c1424mjava.model.User;
import com.nocountry.c1424mjava.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminUserSeeder implements ApplicationRunner {

    @Autowired
    private UserRepository userRepository;

    @Value("${ADMIN_NAME}")
    private String adminName;

    @Value("${ADMIN_EMAIL}")
    private String adminEmail;

    @Value("${ADMIN_PASSWORD}")
    private String adminPassword;

    private void seedAdmin() {

        if (!userRepository.findByEmail(adminEmail).isPresent()) {
            userRepository.save(new User(adminName, adminEmail, new BCryptPasswordEncoder().encode(adminPassword)));
        }
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        seedAdmin();
    }
}
