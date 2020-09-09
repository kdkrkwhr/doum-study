package com.doum.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import com.doum.util.HandlerAuthInterceptor;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

  @Bean
  public HandlerAuthInterceptor handshakeInterceptor() {
      return new HandlerAuthInterceptor();
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(handshakeInterceptor())
        .excludePathPatterns("/");
  }
}
