package com.doum.common.controller;

import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.doum.util.CommonConstant;

@RestController
@RequestMapping("/api/error")
public class ErrorCustomRestController {

  private static final Logger logger = LoggerFactory.getLogger(ErrorCustomRestController.class);

  @RequestMapping(value = "/{statusName}", method = RequestMethod.GET)
  public ResponseEntity<Map<String, Object>> errorStatusResponse(@PathVariable("statusName") String statusName) {
    return new ResponseEntity<>((CommonConstant.ResponseUtil.createErrorObj(statusName,
        HttpStatus.valueOf(statusName).value())), HttpStatus.OK);
  }
}
