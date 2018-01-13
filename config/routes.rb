Rails.application.routes.draw do
  
  get 'say/goodbye'

  get 'say/hello'

  get 'say/filenames'

  get 'say/filesearch'

  root 'say#hello'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
