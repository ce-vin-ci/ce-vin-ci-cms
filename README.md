# Strapi application

A quick description of your strapi application

## dev

'''
npx strapi develop
'''

## troubleshooting mongo

mongo "mongodb+srv://cluster0.zfnnq.mongodb.net/ce-vin-ci-db" --username strapi-user

db.answers.updateMany( {}, { $rename: { "Correct": "isCorrect" } } )

### Why can't I create or update content-types in production/staging?

Strapi stores model configuration files (what defines the model schema) in files such as `api/restaurant/models/restaurant.settings.json`. Due to how Node.js works, in order for changes to take effect, that would require Node to restart the server. This could potentionally cause downtime of your production service and likewise these changes should be tracked in some kind of source control.

Generally your "flow" of development would follow the following path:

- Development - Develop your Strapi application locally on your host machine, then push changes into source control
- Staging - Deploy changes from source control to a "production-like" environment for testing
- Production - If no other changes are needed, deploy into production
- Repeat as needed, it is recommended that you properly version and test your application as you go

At this time and in the future there is no plan to allow model creating or updating while in a production environment, and there is currently no plans to move model settings into the database. There is no known nor recommended workarounds for this.