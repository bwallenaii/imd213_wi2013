<?php
	$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
	$message = "";
	foreach($data as $index => $value)
	{
		if(is_array($value))
		{
			$message .= $index.": ";
			foreach($value as $val)
			{
				$message .= "$val, ";
			}
			$message .= "\r\n";
		}
		else
		{
			$message .= $index.": ".$value."\r\n";
		}
	}
	mail("bwallen.aii@gmail.com", "Web Form!!", $message);
?>
<html>
<head>
	<title>Thanks!</title>
</head>
<body>

<h3>Thanks for providing your information!</h3>
<small>It is unlikely anyone will contact you.</small>
<?php
	echo $data["name"];
?>
<p>
We will not email you at <?php echo $data["email"]; ?>.
</p>
<!-- RIP OUT THE PRE TAGS!!! -->
<pre>
	<?php echo $message; ?>
</pre>
<?php 
/*if(isset($data['times']))
{
	for($i = 0; $i < count($data['times']);++$i)
	{
		echo $data['times'][$i].", ";
	}
}*/
?>
</body>
</html>