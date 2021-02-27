export const commoninitialState = {
  // data: {},
  // cash: {},
  // indicator: false,
  // error: {
  //   is_open: false,
  //   message: ''
  // },
  // document_title: null,
  // user: {},
  // company: {},
  // master: {},
  // end_page_obj: {
  //   url: '',
  //   index: 0
  // },
  // page_cash: {
  //   items: [],
  //   users: [],
  //   active_page: 1,
  //   count: 0,
  //   search_url: '',
  //   limit_size: 25,
  //   search_type: 'all'
  // },
  // construction_category: undefined,
  // error_page: false
}

export const commonReducer = (state: any, action: any) => {
  // const { type, key, value, message } = action
  const { type } = action
  let {
    // indicator,
    // data,
    // cash,
    // error,
    // document_title,
    // user,
    // company,
    // master,
    // end_page_obj,
    // page_cash,
    // construction_category,
    // error_page
  } = state

  switch (type) {
    // case '_indicator':
    //   indicator = value
    //   return {
    //     ...state,
    //     indicator
    //   }
    // case '_show_error':
    //   error.is_open = true
    //   error.message = message
    //   return {
    //     ...state,
    //     error: error
    //   }
    // case '_hide_error':
    //   error.is_open = false
    //   error.message = ''
    //   return {
    //     ...state,
    //     error: error
    //   }
    // case '_set_user':
    //   user = value
    //   return {
    //     ...state,
    //     user: user
    //   }
    // case '_set_company':
    //   company = value
    //   return {
    //     ...state,
    //     company: company
    //   }
    // case '_set_master':
    //   master = value
    //   return {
    //     ...state,
    //     master: master
    //   }
    // case '_save_all_data':
    //   data = value
    //   return {
    //     ...state,
    //     data: data
    //   }
    // case '_save_data':
    //   data[key] = value
    //   return {
    //     ...state,
    //     data: data
    //   }
    // case '_init_data':
    //   data = {}
    //   return {
    //     ...state,
    //     data: data
    //   }
    // case '_cash_data':
    //   cash[key] = value
    //   return {
    //     ...state,
    //     cash: cash
    //   }
    // case '_save_document_title':
    //   document_title = value
    //   return {
    //     ...state,
    //     document_title: document_title
    //   }
    // case '_reset':
    //   return commoninitialState
    // case '_set_end_page_obj':
    //   end_page_obj = value
    //   return {
    //     ...state,
    //     end_page_obj: end_page_obj
    //   }
    // case '_set_page_cash':
    //   page_cash = value
    //   return {
    //     ...state,
    //     page_cash: page_cash
    //   }
    // case '_init_page_cash':
    //   page_cash = commoninitialState.page_cash
    //   return {
    //     ...state,
    //     page_cash: page_cash
    //   }
    // case '_set_construction_category':
    //   construction_category = value
    //   return {
    //     ...state,
    //     construction_category: construction_category
    //   }
    // case '_show_error_page':
    //   error_page = value
    //   return {
    //     ...state,
    //     error_page: error_page
    //   }
    default:
      return state
  }
}

export default commonReducer
