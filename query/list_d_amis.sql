SELECT a.id_account as id_account, 
a.first_name as last_name, 
a.nickname as nickname,
a.profile_pic as profile_pic,
s.friendship_birthday as friendship_birthday
FROM account a INNER JOIN
send_invite s ON
a.id_account = s.id_account_receiver AND 
s.id_account_sender = 1 AND
s.is_accepted = true;


/* result 
 id_account | last_name | nickname | profile_pic | friendship_birthday 
------------+-----------+----------+-------------+---------------------
          2 | Mozell    | Mozel    | Mozell.png  | 2022-08-03
          3 | Jena      | Jena     | Jena.png    | 2022-08-03
         18 | Harmon    | Harmo    | Harmon.png  | 2022-08-03
        225 | Raven     | Raven    | Raven.png   | 2022-08-03
(4 lignes)
*/