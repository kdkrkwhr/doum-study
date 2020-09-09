package com.doum.study.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.doum.study.model.TestDto;

@Mapper
public interface TestMapper {

  TestDto selectData();

}
