package com.doum.study.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.doum.study.model.TestDto;

@Mapper
public interface TestMapper {

  List<TestDto> selectData();

}
