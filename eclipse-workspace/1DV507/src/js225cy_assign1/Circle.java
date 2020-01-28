package js225cy_assign1;

public class Circle extends Shape {
private  int radius;

public Circle(String shapeName,int radius)
{
	super(shapeName);
	setRadius(radius);
}
public double getRadius() {
	return radius;
}

public void setRadius(int radius) {
	this.radius = radius;
}
@Override
public double getArea()
{
	return Math.PI*this.radius*this.radius;
}
@Override
public double getPerimeter() {
	return 2*Math.PI*this.radius;
}
}
