import java.io.*;
 
import jakarta.servlet.http.*;

public class welcomeservlet  extends HttpServlet
{
   public void doGet(HttpServletRequest request, HttpServletResponse response)
             {
try{
        // Step 1: Get the session (don't create new if not exist)
        HttpSession session = request.getSession(false);
 
        // Step 2: Read data from session
        String name = (String) session.getAttribute("name");//name=surya
        String age = (String) session.getAttribute("age");//age=24
 
        // Step 3: Show the result to user
        //response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<h1>Welcome, " + name + "</h1>");
        out.println("<h2>Your age is: " + age + "</h2>");

          }
            catch(Exception e)
           {
            }


}
}