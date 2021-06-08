package com.board.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RestController에 의해 Controller와 ResponseBody가 자동 생성되므로 주석.
// @RestController가 붙은 컨트롤러의 모든 메서드는 자동으로 @ResponseBody가 적용된다.
//@Controller
public class TestController {

	@GetMapping(value = "/members")
//	@ResponseBody // public @ResponseBody String testByResponseBody()와 같이 리턴 타입 좌측에 지정 가능

	public Map<Integer, Object> testByResponseBody() {

		Map<Integer, Object> members = new HashMap<>();

		for (int i = 1; i <= 20; i++) {
			Map<String, Object> member = new HashMap<>();
			member.put("idx", i);
			member.put("nickname", i + "길동");
			member.put("height", i + 20);
			member.put("weight", i + 30);
			members.put(i, member);
		}

		return members;
	}

}