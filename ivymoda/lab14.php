<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<script type="text/javascript">
		function submitForm() {
			// sử dụng javascript để submit form
			document.getElementById('frm').submit();
		}
	</script>
</head>
<body>
<fieldset style="width: 300px;margin: auto;">
	<legend>Cộng 2 số</legend>
    <!-- mặc định method của trang là get, có nghĩa là nếu không ghi thuộc tính method thì khi submit trang sẽ truyền theo kiểu get
          -action="tên trang submit đến"
             - tên trang submid đến
                - nhảu đến một trang khác
                -reload lại trang hiện tại
     -->
    <h1><?php echo $_SERVER["REQUEST_METHOD"]; ?></h1>
    <?php 
          $so1 = "";
          $so2 = "";
          $ketqua = "";
          if($_SERVER["REQUEST_METHOD"] == "POST"){
          	$so1 = $_POST["so1"];
          	$so2 = $_POST["so2"];
          	$kq = $so1 + $so2;
          	$ketqua = "$so1 + $so2 = $kq";
          }
      


     ?>
	<form id="frm" method="post" action="lab14.php">
		<table cellpadding="5">
			<tr>
				<td>số 1</td>
				<td><input type="number" value="<?php echo $so1; ?>" required name="so1"></td>
			</tr>
			<tr>
				<td>số 2</td>
				<td><input type="number" value="<?php echo $so2; ?>" required name="so2"></td>
			</tr>
			<tr>
				<td>ketqua</td>
				<td><input type="text" value="<?php echo $ketqua; ?>" disabled value=""></td>
			</tr>
			<tr>
				<td></td>
				<td>
					<input type="submit" value="thực hiện">&nbsp;&nbsp;
					<a onclick="submitForm();" href="#">Thực hiện</a>
				</td>
			</tr>
		</table>
	</form>
</fieldset>
</body>
</html>