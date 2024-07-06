import os
import requests

ODDS_API = os.getenv('ODDS_API')
ODDS_API_KEY = os.getenv('ODDS_API_KEY')
NETLIFY_FUNCTION_URL=os.getenv('NETLIFY_FUNCTION_URL')
SPORT = 'upcoming'
REGIONS = 'us'
MARKETS = 'h2h,spreads'
ODDS_FORMAT = 'decimal'
DATE_FORMAT = 'iso'

sports_response = requests.get(
    ODDS_API,
    params={'api_key': ODDS_API_KEY}
)

if sports_response.status_code != 200:
    print(f'Failed to get sports: status_code {sports_response.status_code}, response body {sports_response.text}')
else:
    print('List of in season sports:', sports_response.json())

url = f"{ODDS_API}{SPORT}/americafootball_nfl/odds?regions=us&oddsFormat=american"

odds_response = requests.get(
    url,
    params={
        'api_key': ODDS_API_KEY,
        'regions': REGIONS,
        'markets': MARKETS,
        'oddsFormat': ODDS_FORMAT,
        'dateFormat': DATE_FORMAT,
    }
)

if odds_response.status_code != 200:
    print(f'Failed to get odds: status_code {odds_response.status_code}, response body {odds_response.text}')
else:
    odds_json = odds_response.json()
    print('Number of events:', len(odds_json))
    print(odds_json)

    # Deploy data to Netlify function
    deploy_response = requests.post(
        NETLIFY_FUNCTION_URL,
        json=odds_json  # Assuming odds_json is the data you want to deploy
    )

    if deploy_response.status_code == 200:
        print('Data deployed successfully to Netlify function')
    else:
        print(f'Failed to deploy data: {deploy_response.text}')
