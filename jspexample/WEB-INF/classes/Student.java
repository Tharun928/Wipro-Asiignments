

import java.io.Serializable;
 
public class Student implements Serializable
{
    private String name;
    private int rno;
 
    public Student(){}
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public int getRno() {
        return rno;
    }
 
    public void setRno(int rno) {
        this.rno = rno;
    }
 
 
}