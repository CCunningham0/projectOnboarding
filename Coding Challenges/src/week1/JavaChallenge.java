package week1;

import java.util.HashMap;
import java.util.Map;

public class JavaChallenge {
	public static void main(String[] args) {
		// Exercise 1
		iterateHashMap();
		System.out.println("*********************************");
		// Exercise 2
		checkReverseString("goodsoup", "puosdoog");
	}

	public static void iterateHashMap() {
		Map<String, String> newMap = new HashMap<String, String>() {
			{
				put("key1", "value1");
				put("key2", "value2");
			}
		};

		String key = "key1";

		while (newMap.containsKey(key)) {
			for (String value : newMap.values()) {
				System.out.println(value);
			};
			key = null;
		}
	}

	public static boolean checkReverseString(String str1, String str2) {
		StringBuilder reverseStr1 = new StringBuilder();

		// reverse str1
		for (int i = 0; i < str1.length(); i++) {
			reverseStr1.insert(0, str1.charAt(i));
		}

		// compare result with str2
		if (reverseStr1.toString().equals(str2)) {
			System.out.println("true");
			return true;
		} else {
			System.out.println("false");
			return false;
		}
	}
}
