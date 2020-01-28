package js225cy_assign1;

public class Square extends Rectangle {

	public Square(String shapeName, int side) {
		super(shapeName, side);
super.getBase();
	}

	@Override
	public double getArea() {
		return this.getBase() * this.getBase();
	}

	@Override
	public double getPerimeter() {
		return 4 * this.getBase();
	}
}
