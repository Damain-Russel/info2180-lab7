<?php
if($_GET['country']){
    $country = $_GET['country'];
    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'world';
    
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $qstring = "SELECT * FROM countries where name LIKE '%".$country."%'";
    $stmt = $conn->query($qstring);
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo '<ul>';
    foreach ($results as $row) {
      echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}
else{
    die("Refused");
}
