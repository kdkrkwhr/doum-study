package com.doum.study.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.doum.study.service.TestService;

@RestController
@RequestMapping("/api/test")
public class TestRestController {

  @Autowired
  private TestService service;

  @RequestMapping(value = "/get", method = RequestMethod.GET)
  public Object testGet() {
    return service.selectData();
  }
}
