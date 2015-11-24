package examen;
import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;


public class YearUtilitiesTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void prueva1() {
		YearUtilities a = new YearUtilities();
		assertFalse(a.isLeap(1992));
	}
	@Test
	public void prueva2() {
		YearUtilities a = new YearUtilities();
		assertFalse(a.isLeap(2004));
	}
	@Test
	public void prueva3() {
		YearUtilities a = new YearUtilities();
		assertTrue(a.isLeap(2005));
	}

}
