package com.doum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doum.mapper.TestMapper;
import com.doum.model.TestDto;

@Service
public class TestService {

  @Autowired
  private TestMapper mapper;

  public TestDto selectData() {
    return mapper.selectData();
  }
}
