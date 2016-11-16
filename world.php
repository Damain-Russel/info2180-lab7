<?php


$country = $_GET['country'];
$all = $_GET['all'];

if($country || $all){

    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'world';
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    if($all == "true"){
        $qstring = "SELECT * FROM countries";
    }
    else{
        $qstring = "SELECT * FROM countries where name LIKE '%".$country."%'";
    }
    
    $stmt = $conn->query($qstring);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if(empty($results)){
        echo "FALSE";
    }else{
        echo '<ul>';
        foreach ($results as $row) {
          echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        }
        echo '</ul>';
    }
   
}
else{
    die("Refused");
}
