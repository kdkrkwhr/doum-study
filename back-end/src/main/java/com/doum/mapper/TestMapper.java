package com.doum.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.doum.model.TestDto;

@Mapper
public interface TestMapper {

  TestDto selectData();

}
