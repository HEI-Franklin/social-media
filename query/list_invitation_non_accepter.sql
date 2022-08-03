CREATE VIEW first_and_last_name AS 
    SELECT id_account, first_name, last_name
    FROM account;

SELECT first_name, last_name FROM first_and_last_name
    WHERE id_account IN (
    SELECT id_account_receiver
    FROM send_invite
    WHERE id_account_sender = 1 AND is_accepted = false
);

DROP VIEW first_and_last_name;

/* result

first_name | last_name 
-----------+-----------
 Raheem     | Conn
 (1 ligne)
*/