;;; Directory Local Variables
;;; For more information see (info "(emacs) Directory Variables")

((nil
  (eval progn
        (let
            ((base-path
              (locate-dominating-file default-directory ".dir-locals.el")))
          (make-local-variable 'exec-path)
          (add-to-list 'exec-path
                       (expand-file-name "node_modules/.bin/" base-path))))
  (make-backup-files))
 (dired-mode
  (dired-omit-extensions . (".bs.js")))
 (js2-mode
  (js2-strict-trailing-comma-warning))
 (json-mode
  (js-indent-level . 2))
 (pug-mode
  (pug-tab-width . 2)))






