<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Jquery</title>
		<script type="text/javascript" src="jquery/jquery-1.11.3.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
			  $("p").click(function(){
			  	$(this).hide();
			  });
			});
		</script>
	</head>
	<body>
		<p>点击我，隐藏</p>
	</body>
</html>