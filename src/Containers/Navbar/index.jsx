import "./styles.css";

function Navbar() {
	return (
		<div class="body">
			<input type="checkbox" id="active" />
			<label for="active" class="menu-btn">
				<span></span>
			</label>
			<label for="active" class="close"></label>
			<div class="wrapper">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/register">Register</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
