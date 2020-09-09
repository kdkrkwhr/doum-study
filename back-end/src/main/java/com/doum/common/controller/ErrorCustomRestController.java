package com.doum.common.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.doum.util.HandlerAuthInterceptor;

@RestController
@RequestMapping("/error")
public class ErrorCustomRestController {

  private static final Logger logger = LoggerFactory.getLogger(ErrorCustomRestController.class);

  @RequestMapping(value = "/404", method = RequestMethod.GET)
  public String error404() {
    logger.error("404 ERROR");
    return "404 ERROR";
  }

  @RequestMapping(value = "/500", method = RequestMethod.GET)
  public String error500() {
    logger.error("500 ERROR");
    return "500 ERROR";
  }
}
