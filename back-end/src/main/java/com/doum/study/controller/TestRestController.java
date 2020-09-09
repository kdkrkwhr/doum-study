package com.doum.study.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.doum.study.model.TestDto;
import com.doum.study.service.TestService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/test")
public class TestRestController {

  private static final Logger logger = LoggerFactory.getLogger(TestRestController.class);

  @Autowired
  private TestService service;

  @RequestMapping(value = "/get", method = RequestMethod.GET)
  public Object testGet() {
    List<?> result = service.selectData();
    for (Object obj : result) logger.debug("Response : {}", ((TestDto) obj).getTest());
    return result;
  }
}
