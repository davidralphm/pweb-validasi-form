const form = document.forms['form'];
const jurusan = form['jurusan'];
const statusVaksin1 = form['status-vaksin-1'];
const statusVaksin2 = form['status-vaksin-2'];

const vaksinasi1 = document.querySelector('.vaksinasi-1');
const vaksinasi2 = document.querySelector('.vaksinasi-2');

const jenisVaksin1 = form['jenis-vaksin-1'];
const noSertif1 = form['no-sertif-1'];
const tanggalVaksin1 = form['tanggal-vaksin-1'];

const jenisVaksin2 = form['jenis-vaksin-2'];
const noSertif2 = form['no-sertif-2'];
const tanggalVaksin2 = form['tanggal-vaksin-2'];

function validasi() {
	// Validasi jurusan

	if (jurusan.selectedIndex == 0) {
		jurusan.focus();
		alert('Harap memilih jurusan!');

		return false;
	}

	// Status vaksinasi 1

	if (statusVaksin1.selectedIndex == 0) {
		statusVaksin1.focus();
		alert('Harap memilih status vaksinasi pertama!');

		return false;
	}

	if (statusVaksin1.selectedIndex == 2) {
		if (jenisVaksin1.selectedIndex == 0) {
			jenisVaksin1.focus();
			alert('Harap memilih jenis vaksin pertama!');

			return false;
		}
	}

	// Status vaksinasi 2

	if (statusVaksin2.selectedIndex == 0) {
		statusVaksin2.focus();
		alert('Harap memilih status vaksinasi kedua!');

		return false;
	}

	if (statusVaksin2.selectedIndex == 2) {
		if (jenisVaksin2.selectedIndex == 0) {
			jenisVaksin2.focus();
			alert('Harap memilih jenis vaksin kedua!');

			return false;
		}
	}

	return confirm('Submit data?');
}

function ubahStatusVaksin() {
	// Belum

	if (statusVaksin1.selectedIndex == 1) {
		vaksinasi1.style.display = 'none';

		jenisVaksin1.required = false;
		noSertif1.required = false;
		tanggalVaksin1.required = false;
	}

	if (statusVaksin2.selectedIndex == 1) {
		vaksinasi2.style.display = 'none';

		jenisVaksin2.required = false;
		noSertif2.required = false;
		tanggalVaksin2.required = false;
	}

	// Sudah

	if (statusVaksin1.selectedIndex == 2) {
		vaksinasi1.style.display = 'block';

		jenisVaksin1.required = true;
		noSertif1.required = true;
		tanggalVaksin1.required = true;
	}

	if (statusVaksin2.selectedIndex == 2) {
		vaksinasi2.style.display = 'block';

		jenisVaksin2.required = true;
		noSertif2.required = true;
		tanggalVaksin2.required = true;
	}
}