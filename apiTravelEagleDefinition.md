# Travel Planning API

API for travel planning application

## Get Route

Returns full information about the route for a given city and travel dates.

- **URL**: `/getRoute`
- **Method**: `GET`
- **Parameters**:
    - `city` (required, string): City name
    - `startDate` (required, string): Start date of the trip (ISO format)
    - `endDate` (required, string): End date of the trip (ISO format)

### Responses

- **200 OK**
    - **Content type**: `application/json`
    - **Schema**:
      ```json
      {
        "weatherWarning": "string",
        "tripDays": [
          {
            "destinations": [
              {
                "place": {
                  "placeId": "string",
                  "name": "string",
                  "type": "string",
                  "imageUrl": "string",
                  "userRating": "number",
                  "userReviews": "number",
                  "likes": "number",
                  "website": "string",
                  "description": "string"
                },
                "eatery": {
                  "placeId": "string",
                  "name": "string",
                  "type": "string",
                  "imageUrl": "string",
                  "userRating": "number",
                  "userReviews": "number",
                  "likes": "number",
                  "website": "string",
                  "description": "string"
                },
                "travelTime": "string"
              }
            ]
          }
        ]
      }
      ```

#### RouteResponse

- `weatherWarning` (string): Warning about weather (can be null)
- `tripDays` (array): Array of trip days

#### TripDay

- `destinations` (array): Array of destinations

#### Destination

- `place` (object): Place object
- `eatery` (object): Eatery object
- `travelTime` (string): Travel time to the destination

#### Place

- `placeId` (string): Place ID
- `name` (string): Place name
- `type` (string): Place type
- `imageUrl` (string): URL of the image
- `userRating` (number): User rating
- `userReviews` (number): Number of user reviews
- `likes` (number): Number of likes
- `website` (string, optional): Website URL
- `description` (string, optional): Short description of the place
