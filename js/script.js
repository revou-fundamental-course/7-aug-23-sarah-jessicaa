function hitung() {
	let sisi1 = parseFloat(document.getElementById("sisi1").value);
	let sisi2 = parseFloat(document.getElementById("sisi2").value);
	let sisi3 = parseFloat(document.getElementById("sisi3").value);
	let alas = parseFloat(document.getElementById("alas").value);
	let tinggi = parseFloat(document.getElementById("tinggi").value);

	if (sisi1 && sisi2 && sisi3) {
		let keliling = sisi1 + sisi2 + sisi3;
		document.getElementById("keliling").innerHTML = keliling.toFixed(2);
	} else {
		document.getElementById("keliling").innerHTML = "Masukkan nilai ketiga sisi";
	}

	if (alas && tinggi) {
		let luas = (alas * tinggi) / 2;
		document.getElementById("luas").innerHTML = luas.toFixed(2);
	} else {
		document.getElementById("luas").innerHTML = "Masukkan nilai alas dan tinggi";
	}
}

function resetForm() {
	document.getElementById("sisi1").value = "";
	document.getElementById("sisi2").value = "";
	document.getElementById("sisi3").value = "";
	document.getElementById("alas").value = "";
	document.getElementById("tinggi").value = "";
	document.getElementById("luas").innerHTML = "";
	document.getElementById("keliling").innerHTML = "";
}
