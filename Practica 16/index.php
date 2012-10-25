<!DOCTYPE HTML>
<html>
<head>
  <title>Pagina de concursos</title>
  <meta name="description" content="website description" />
  <meta name="keywords" content="website keywords, website keywords" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <!-- modernizr enables HTML5 elements and feature detects -->
  <script type="text/javascript" src="js/modernizr-1.5.min.js"></script>
  <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
</head>

<body onload="inicio();">
  <div id="main">
    <header>
    	<?php
    		include("sections/header.html");
    	?>
    </header>
    
    <div id="site_content">
	<aside>
		<?php
    		include("sections/aside.html");
    	?>
	</aside>
      
      </div>
      <div id="content" class="content">
        
      </div>
    </div>
    <footer>
      <?php
    		include("sections/footer.html");
		?>
    </footer>
  </div>
</body>
</html>
