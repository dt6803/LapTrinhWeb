package com.demo.models;

import java.util.ArrayList;
import java.util.List;

import com.demo.entities.Account;

public class AccountModel {
	public List<Account> findAll() {
		List<Account> accounts = new ArrayList<Account>();
		accounts.add(new Account("neverabc2003@gmail.com", "123"));
		accounts.add(new Account("thien@gmail.com", "123"));
		return accounts;
	}

	public Account findAccount(String email) {
		for (Account account : findAll()) {
			if (account.getEmail().equalsIgnoreCase(email)) {
				return account;
			}
		}
		return null;
	}

	public boolean checkLogin(String email, String password) {
		Account account = findAccount(email);
		if (account != null) {
			if (account.getPassword().equalsIgnoreCase(password)) {
				return true;
			}
		}
		return false;
	}
}
