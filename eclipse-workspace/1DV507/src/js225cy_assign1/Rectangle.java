package js225cy_assign1;

public class Rectangle extends Shape {
	private int base;
	private int height;

	public Rectangle(String shapeName, int base, int hieght) {
		super(shapeName);
		setBase(base);
		setHeight(hieght);
	}
	public Rectangle(String shapeName,int side)
	{super(shapeName);
	this.base=side;
	}
	public int getBase() {
		return base;
	}

	public void setBase(int base) {
		this.base = base;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	@Override
	public double getArea() {

		return this.base*this.height;
	}

	@Override
	public double getPerimeter() {

		return 2*(this.base+this.height);
	}

}
