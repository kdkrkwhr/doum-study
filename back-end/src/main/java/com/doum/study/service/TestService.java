package com.doum.study.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.doum.study.mapper.TestMapper;
import com.doum.study.model.TestDto;

@Service
public class TestService {

  @Autowired
  private TestMapper mapper;

  public List<TestDto> selectData() {
    return mapper.selectData();
  }
}
