
import json
import pickle
import numpy as np
import warnings
warnings.filterwarnings('ignore')
model=None
location=None
columns_data=None


def get_estimator_price(location,total_sft,bath,bhk):
    try:
        indx_loc = columns_data.index(location.lower())
    except:
        indx_loc=-1
    x_p = np.zeros(len(columns_data))
    x_p[0] = total_sft
    x_p[1] = bath
    x_p[2] = bhk
    if indx_loc >= 0:
        x_p[indx_loc] = 1

    return model.predict(x_p.reshape(1, -1))[0][0]


def get_location_name():
    return location


def load_artificates():
    global model
    global location
    global columns_data

    with open('./artificates/columns.json','r')as f:
        columns_data=json.load(f)["data_columns"]
        location=columns_data[3:]

    with open('./artificates/bengaluru_house_prices_model.pickle','rb')as f:
        model=pickle.load(f)

    print('Save is Done')



if __name__=='__main__':
    load_artificates()
    print(get_location_name())