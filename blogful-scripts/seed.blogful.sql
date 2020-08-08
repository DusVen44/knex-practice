INSERT INTO blogful_articles (title, date_published, content)
VALUES
    (
        'Morning Routine for Better Health', 
        now() - '20 days'::INTERVAL,
        'Here is a quick routine to get started in the morning'
    ),
    (
        'How Much Water Should YOU Drink?',
        now() - '18 days'::INTERVAL,
        'Start with a gallon, and when work your way up to a max of 2 gallons'
    ),
    (
        'What Her Eyes are Telling You',
        now() - '16 days'::INTERVAL,
        'She''s lying!'
    ),
    (
        'A Workout Routine to Test Your Strength',
        now() - '14 days'::INTERVAL,
        'Here''s a simple workout to test your true strength'
    ),
    (
        'Master a New Skill in a Month',
        now() - '12 days'::INTERVAL,
        'Want to master a new skill quickly?'
    ),
    (
        'Are Giraffes Real?',
        now() - '10 days'::INTERVAL,
        'Let''s find out if giraffes exist'
    )