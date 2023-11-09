package com.demo.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.annotation.*;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet(name = "LoginController", value = "/login")
public class LoginController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("email");
        String pass = req.getParameter("pass");
        if("neverabc2003@gmail.com".equals(email) && "123".equals(pass)){
            resp.getWriter().println("Welcome " + "+ " + email);
        } else{
            req.setAttribute("error", "Bạn nhập sai email hoặc mật khẩu");
            req.getRequestDispatcher("login.jsp").forward(req,resp);
        }
    }
}
